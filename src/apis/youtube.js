import axios from "axios";
const KEY = "AIzaSyAS4HcWljOvVLG_-hsUmH7poIuc80j3c7I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
