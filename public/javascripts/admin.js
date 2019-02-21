var data = {
    users: [],
    checkedUsers: []
};

axios.get('/users').then((res) => {
    data.users = data.users.concat(res.data);
});

var vm = new Vue({
    el: '#admin_panel',
    data: data,
    methods: {
        usersDisable: function (event) {
            axios.patch('/users', {
                checkedUsers: this.checkedUsers,
                action: "usersDisable"
            });
            axios.get('/users').then((res) => {
                data.users = res.data;
            });
            this.checkedUsers = [];
        },
        usersEnable: function (event) {
            axios.patch('/users', {
                checkedUsers: this.checkedUsers,
                action: "usersEnable"
            });
            axios.get('/users').then((res) => {
                data.users = res.data;
            });
            this.checkedUsers = [];
        }
    }
}); 
