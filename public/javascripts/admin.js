var data = {
    users: [],
    checkedUsers: []
};

getUsers();

var vm = new Vue({
    el: '#admin_panel',
    data: data,
    methods: {
        usersDisable: function (event) {
            axios.patch('/users', {
                userIds: this.checkedUsers,
                action: "usersDisable"
            });
            getUsers();
            this.checkedUsers = [];
        },
        usersEnable: function (event) {
            axios.patch('/users', {
                userIds: this.checkedUsers,
                action: "usersEnable"
            });
            getUsers();
            this.checkedUsers = [];
        }
    }
}); 

function getUsers() {
    axios.get('/users').then((res) => {
        data.users = res.data;
    });
}
