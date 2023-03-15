// https://h5.pipix.com/bds/webapi/item/detail/?item_id=6762160710051961101&source=share

const axios = require('axios');
const json2xls = require('json2xls');
const fs = require('fs');
const http = require('http');

// Init app
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const bodyParser = require('body-parser');
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// const port = 5000;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const url =
  'http://api.pipix.com/bds/feed/stream/?layout_style=1&optimize_first_item=false&auto_play=1&first_launch=false&is_new_story=true&auto_play_wifi=false&auto_play_mobile=true&list_type=1&saas_plugin_ready=0&direction=1&api_version=5.2&vrsr_enable=0&first_launch_pro=false&parent_channel=9999&hashtag_request_type=0&iid=3028470891287503&device_id=1143120971966990&ac=wifi&channel=ppx_sem_baidu_ad_and_5h_7&aid=1319&app_name=super&version_code=450&version_name=4.5.0&device_platform=android&os=android&ssmix=a&device_type=SM-G955N&device_brand=Android&language=zh&os_api=22&os_version=5.1.1&manifest_version_code=450&resolution=900*1600&dpi=320&update_version_code=45050&cdid=a52d16cf-a4af-4fe7-9979-d89ca1e201c8&app_region=CA&sys_region=CA&time_zone=America%2FBogota&app_language=ZH&carrier_region=CA&last_channel&recommend_disable=0&last_update_version_code=0&total_feed_count=2&cursor=1678594907977&channel_feed_count=1&feed_count=1';
const config = {
  headers: {
    'Accept-Encoding': 'gzip',
    'X-SS-REQ-TICKET': '1678594906210',
    'x-vc-bdturing-sdk-version': '2.2.1.cn',
    'passport-sdk-version': '30',
    'sdk-version': '2',
    'User-Agent':
      'com.sup.android.superb/450 (Linux; U; Android 5.1.1; zh_CA; SM-G955N; Build/NRD90M.G955NKSU1AQDC;tt-ok/3.10.0.2)',
    Cookie:
      'store-region=ca; store-region-src=did; ttreq_tob=1$e4342cf0c77f39b66c3500853b958658a8114c2b; install_id=3028470891287503; ttreq=1$7e7d5de01dac2cb859fbe3be4cc3821506f24c31; odin_tt=63f3836c9377976ca8182a862eeebc7f6cf9b48c2eec4749a377753eed91f9e1c78fe6bda1e27abb636dbc610828d514991311541806e635497e2358ad4be34fcf37c23fb48520c21e7f92242aef6c27; BAIDUID=1D7D50DC530E5EB5C98C4B006B0FBE40:FG=1',
    'X-Ladon': 'bzK7dlGpXY+4ZWRelWjb1W8cq9Nz9DQvuQOLkNAv9ICHFkIm',
    'X-Khronos': '1678594906',
    'X-Gorgon': '0404609d40050bb5846b33936c413b9485588f5cf46b7dc199a7',
    'X-Argus':
      'F6W3sPJrQ0MKeOv9Kd/wyzDLbZKPDdrMQNJFolnn7f2zINCzHmJ7Ki6zOQSKciqeRemtWXHhI8fSi0rq7mgkWZryTTvujSUSX1WAN3gTwtfKNJv6+v94HfWyJsQ5Snq4jAbP1O1ZuhcPJgRvJcDR/vAUb4BnXI9GlRh/93lmIytAVu0rrwKrRF/7Wj5R2AWxrVtk9FrnyzR+gl+N44oj1X/s0hi/KcHdMicBzGbIMGu5K4HhQFgvdy4LpG6dthdnUAe8KiXbkCiFTSeMR1n2OeJx',
    Host: 'api.pipix.com',
    Connection: 'Keep-Alive',
  },
};

const jsonData = [];
for (var i = 0; i < 10; i++) {
  axios
    .get(url, config)
    .then((result) => {
      const assets = result.data.data.data;
      console.log('assets length is ', assets.length);
      // console.log('assets  ', assets);

      assets.map((data) => {
        const asset = getAsset(data);

        data.item.video.video_god_comment_urls && jsonData.push(asset);
      });
    })
    .catch((e) => {
      console.log('error is ', e);
    });
}

setTimeout(() => {
  // Convert JSON data to Excel file
  const xls = json2xls(jsonData);

  // Save Excel file to disk
  fs.writeFileSync('data4.xlsx', xls, 'binary');
  console.log('File created successfully!');
}, 10000);

const getAsset = (data) => {
  //  const message = result.data.message;
  //  console.log('message is ', message);
  //  const tips = result.data.data.tips;
  //  console.log('tips is ', tips);
  //  const display_time = result.data.data.data[0].display_time;
  //  console.log('display_time is ', display_time);
  //  const duration1 = result.data.data.data[0].item.duration;
  //  console.log('duration 1 is ', duration1);
  //  const data = result.data.data.data[0];

  const title = data.item.content;
  const duration = data.item.duration;
  const likes = data.item.stats.like_count;
  const videoWithGodComment =
    data.item.video.video_god_comment_urls &&
    data.item.video.video_god_comment_urls[0];
  const video_high = data.item.video.video_high.url_list[0].url;
  const godCommentText = data.item.comments && data.item.comments[0].text;
  const godCommentUsername =
    data.item.comments && data.item.comments[0].user.name;
  const godCommentUserAvatar =
    data.item.comments && data.item.comments[0].user.avatar.url_list[0].url;
  const godCommentLikes =
    data.item.comments && data.item.comments[0].like_count;
  // console.log('title is ', title);
  // console.log('videoWithGodComment is ', videoWithGodComment);
  // console.log('video_high is ', video_high);
  // console.log('duration is ', duration);
  // console.log('god comment is ', godCommentText);
  // console.log('god comment user is ', godCommentUsername);
  // console.log('god comment user avatar is ', godCommentUserAvatar);
  // console.log('god comment likes is ', godCommentLikes);

  godCommentText && downloadVideo(godCommentText, video_high);
  const asset = {
    title: title,
    duration: duration,
    likes: likes,
    videoWithGodComment: videoWithGodComment,
    video_high: video_high,
    godCommentText: godCommentText,
    godCommentUsername: godCommentUsername,
    godCommentUserAvatar: godCommentUserAvatar,
    godCommentLikes: godCommentLikes,
  };
  return asset;
};

const downloadVideo = (filename, url) => {
  const file = fs.createWriteStream(`${filename}.mp4`);

  http.get(url, function (response) {
    response.pipe(file);

    // after download completed close filestream
    file.on('finish', () => {
      file.close();
      console.log('Download Completed');
    });
  });
};
