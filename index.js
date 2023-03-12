// https://h5.pipix.com/bds/webapi/item/detail/?item_id=6762160710051961101&source=share

const axios = require('axios');
const json2xls = require('json2xls');
const fs = require('fs');

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

axios
  .get(
    `https://h5.pipix.com/bds/webapi/item/detail/?item_id=7162763767879571723&source=share`
  )
  .then((result) => {
    const data = result.data.data;

    const title = data.item.content;
    const duration = data.item.duration;
    const videoWithGodComment = data.item.video.video_god_comment_urls[0];
    const godCommentText = data.item.comments[0].text;
    const godCommentUsername = data.item.comments[0].user.name;
    const godCommentUserAvatar =
      data.item.comments[0].user.avatar.url_list[0].url;
    const godCommentLikes = data.item.comments[0].like_count;

    console.log('title is ', title);
    console.log('duration is ', duration);
    console.log('god comment is ', godCommentText);
    console.log('god comment user is ', godCommentUsername);
    console.log('god comment user avatar is ', godCommentUserAvatar);
    console.log('god comment likes is ', godCommentLikes);
    // JSON data to be saved in Excel file
    // const jsonData = [
    //   { Name: 'John Doe', Age: 32, Email: 'john.doe@example.com' },
    //   { Name: 'Jane Smith', Age: 28, Email: 'jane.smith@example.com' },
    //   { Name: 'Bob Johnson', Age: 45, Email: 'bob.johnson@example.com' },
    // ];

    // // Convert JSON data to Excel file
    // const xls = json2xls(jsonData);

    // // Save Excel file to disk
    // fs.writeFileSync('data.xlsx', xls, 'binary');
    // console.log('Excel file saved successfully.');
  });
