var data = {
    users: [],
    checkedUsers: []
};

function updateUsers() {
    axios.get('/users').then((res) => {
        data.users = res.data;
    });
}

updateUsers();

var vm = new Vue({
    el: '#admin_panel',
    data: data,
    methods: {
        usersDisable: function (event) {
            axios.patch('/users', {
                checkedUsers: this.checkedUsers,
                action: "usersDisable"
            });
            updateUsers();
            this.checkedUsers = [];
        },
        usersEnable: function (event) {
            axios.patch('/users', {
                checkedUsers: this.checkedUsers,
                action: "usersEnable"
            });
            updateUsers();
            this.checkedUsers = [];
        }
    }
}); 
