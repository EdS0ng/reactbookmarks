import API from "../API";

let LinkActions = {
  saveBookmark(newBookmark) {
    API.saveBookmark(newBookmark);
  },
  getAllBookmarks() {
    API.fetchAllBookmarks();
  },
  removeBookmarks(data) {
    API.removeBookmarks(data);
  },
  likeBookmark(data){
    API.likeBookmark(data);
  }
};

export default LinkActions;
