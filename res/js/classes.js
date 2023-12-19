// model
class UsersModel {
    constructor() {
        this.users = [];
    }

    checkPass(firstPass, secondPass) {
        if (firstPass !== secondPass) {
            return false;
        } else {
            return true;
        }
    }

    isNewUser(userName) {
        return this.users.findIndex(
            (item) => item.name.toUpperCase() === userName.toUpperCase()
        );
    }

    loadUsers(bj) {
        this.users = JSON.parse(localStorage.getItem("users")) || [];
    }

    saveUsers() {
        localStorage.setItem("users", JSON.stringify(this.users));
    }
}

// view
class UsersView {
    constructor() {
        this.userName = document.querySelector("#user-name");
        this.userPass = document.querySelector("#user-pass");
        //   this.result = document.querySelector(".result");
        this.errorOut = document.querySelector("#errors");
        this.loginOut = document.querySelector("#login-res");
    }

    showError(errorText) {
        this.loginOut.innerHTML = "";
        this.errorOut.innerHTML = `<p> ${errorText} </p>`;
    }

    showLoginResult(resultText) {
        this.errorOut.innerHTML = "";
        this.loginOut.innerHTML = `<p> ${resultText} </p>`;
    }
}

// controller
class UsersController {
    #sighBtn;
    #loginBtn;

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.model.loadUsers();

        //sign up
        document.querySelector("#signBtn").addEventListener("click", () => {
            let userName = document.querySelector("#user-name");
            let firstPass = document.querySelector("#user-pass");
            let secondPass = document.querySelector("#chk-user-pass");

            if (this.model.checkPass(firstPass.value, secondPass.value)) {
                if (this.model.isNewUser(userName.value) < 0) {
                    //new user
                    let newUser = {
                        name: userName.value,
                        password: firstPass.value,
                    };

                    this.model.users.push(newUser);
                    this.model.saveUsers();

                    userName.value = "";
                    firstPass.value = "";
                    secondPass.value = "";

                    this.signWindow.close();
                } else {
                    this.view.showError("We have that user!");
                }
            } else {
                this.view.showError("Passwords not equal!");
            }
        });

        //login
        document.querySelector("#loginBtn").addEventListener("click", () => {
            let userName = document.querySelector("#log-user-name");
            let userPass = document.querySelector("#log-user-pass");

            let userPos = this.model.isNewUser(userName.value); //get user pos
            if (userPos >= 0) {
                //old user
                let password = this.model.users[userPos].password;

                if (password == userPass.value) {
                    document.querySelector("#log-in__btn").textContent =
                        userName.value;

                    userName.value = "";
                    userPass.value = "";
                    this.view.showLoginResult('');

                    this.loginWindow.close();
                } else {
                    this.view.showLoginResult(
                        "User name or user password wrong!"
                    );
                }
            } else {
                //new user
                this.view.showLoginResult("User name or user password wrong!");
            }
        });

        //sign
        this.signWindow = document.querySelector(".dialog-sign");

        // isSignOpen = false;
        document
            .getElementById("sign-up__btn")
            .addEventListener("click", (e) => {
                this.signWindow.showModal();
                // this.isSignOpen = true;
                // e.stopPropagation();
            });

        //close signup
        document
            .getElementById("close-modal-btn")
            .addEventListener("click", () => {
                this.view.showLoginResult('');
                this.signWindow.close();
                // isSignOpen = false;
            });

        //login
        this.loginWindow = document.querySelector(".dialog-login");

        // this.isLoginOpen = false;
        document
            .getElementById("log-in__btn")
            .addEventListener("click", (e) => {
                this.loginWindow.showModal();
                // this.isLoginOpen = true;
                // e.stopPropagation();
            });
        //close login
        document
            .getElementById("close-log-modal-btn")
            .addEventListener("click", () => {
                this.view.showLoginResult('');
                this.loginWindow.close();
                //     isLoginOpen = false;
            });

        //close modal
        // document.addEventListener('click', (e) => {
        //   if (isSignOpen && !modalBox.contains(e.target)) {
        //     signWindow.close()

        //   }
        // })
    }
}
