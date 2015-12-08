import {get, post} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  saveBookmark(newBookmark) {
    post("/api/links", newBookmark)
      .done(data => ServerActions.receiveOneLink(data));
  },
  fetchAllBookmarks() {
    console.log("2. In the API.fetchAllBookmarks()")
    get("/api/links").done(data => ServerActions.receiveLinks(data.links));
  },
  removeBookmarks(data){
    console.log('API removebookmarks');
    post("/api/delete", data).done(data => ServerActions.receiveLinks(data.links));
  },
  likeBookmark(data){
    post('/api/links/like', data).done(data => ServerActions.receiveLinks(data.links));
  }
  
};

export default API;
