# Audio and Video Tags

## Video Tag in HTML📹

The 📹 video tag in `HTML` embeds a media player

However, it has the following properties

* `src` : Where the path(relative) of the video 📹 is given. It can also be the URL.
    
* `controls` : This attribute will give you the controls i.e. Buttons to use the features of the media player i.e. ▶ `play` , `pause`⏸, `forward`, `full-screen`, `download`, `picture-in-picture`.
    
* `type` : This refers to the type of video that we are going to add i.e. `extension` (`mp4`,)
    
* `autoplay` : It will `autoplay` your video 📹 when the page is being loaded.
    
* `loop` : It will keep playing the video 📹 in loop and also has boolean value, default value is false.
    
* 🔕 `muted` : It has a boolean(`true` / `false`) value, where
    
* Also, you can provide `inline` styling.
    

```xml
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Video</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <video
      src="/HTML/video/video-demo.mp4"
      width="400"
      type="video/mp4"
      controls
      muted="false"
      style="background-color: #777; padding: 20px"
      autoplay="true"
      loop
    ></video>
  </body>
</html>
```

## 🔉Audio Tag in HTML

* Audio 🔉 tag will embed the sound content in the document 📄.
    
* And it will have the following attributes.
    
* `src` : will have a path (relative)or link 🔗 where the audio file is been 🏬 stored.
    
* `type`: `audio`, `mpeg` , `ogg` are the types of audio files 📂 which can be added over.
    
* 🎮 `controls` : will add all the controls to `play` ▶ , `pause` ⏸, `seek`.
    
* `autoplay`: will play the sound/audio as soon as the page is loaded.
    
* ➿ `loop`: will keep playing the audio in the loop.
    
* `muted`: Its a the attribute with boolean value where the option to mute the audio 🔉 is provided when the page is loaded.
    

```xml
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Audio Tag in HTML</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
<body>
 <audio src="/HTML/sound/beats.mp3" controls autoplay loop></audio>
</body>
</html>
```

Thanks fore reading.