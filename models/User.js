class User {
  constructor(json) {
    this.id = json.id?.toString();
    this.uid = json.uid;
    this.name = json.name;
    this.email = json.email;
    this.createdAt = json.createdAt;
    this.posts = json.posts ?? [];
  }
}
