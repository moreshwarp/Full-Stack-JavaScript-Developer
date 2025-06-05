import fs from 'fs';
import schedule from 'node-schedule';
import { OpenAIApi, Configuration } from 'openai';

const tasksFile = './tasks.json';

function loadTasks() {
  if (!fs.existsSync(tasksFile)) return [];
  return JSON.parse(fs.readFileSync(tasksFile));
}

function saveTasks(tasks) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

async function parseWithLLM(text) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY env var required');
  const openai = new OpenAIApi(new Configuration({ apiKey }));

  const prompt = `Extract the task description and ISO 8601 reminder time from this text.
Respond with JSON in the form { "description": "", "remindAt": "YYYY-MM-DDTHH:MM:SSZ" }.
Text: "${text}"`;

  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  const reply = res.data.choices[0].message.content.trim();
  return JSON.parse(reply);
}

function scheduleReminder(task) {
  const date = new Date(task.remindAt);
  if (date < new Date()) return; // skip past reminders
  schedule.scheduleJob(date, () => {
    console.log(`Reminder: ${task.description} (scheduled for ${task.remindAt})`);
  });
}

async function addTask(text) {
  const parsed = await parseWithLLM(text);
  const tasks = loadTasks();
  tasks.push(parsed);
  saveTasks(tasks);
  console.log('Task added:', parsed);
}

function runReminders() {
  const tasks = loadTasks();
  tasks.forEach(scheduleReminder);
  console.log('Reminders scheduled:', tasks.length);
}

function listTasks() {
  const tasks = loadTasks();
  console.log(tasks);
}

const [cmd, ...args] = process.argv.slice(2);

(async () => {
  try {
    if (cmd === 'add') {
      const text = args.join(' ');
      if (!text) throw new Error('provide a task description');
      await addTask(text);
    } else if (cmd === 'run') {
      runReminders();
    } else if (cmd === 'list') {
      listTasks();
    } else {
      console.log('Usage: node index.js [add|run|list]');
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
})();
