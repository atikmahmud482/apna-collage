let DATA = "secret information";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log(DATA);
  }
}
let student1 = new User("atik", "atik@gamil.com");
let student2 = new User("mahmud", "mahmud@gamil.com");
