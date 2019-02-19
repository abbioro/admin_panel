var data = {
    users: []
};

axios.get('/users').then((res) => {
    data.users = data.users.concat(res.data);
});

var vm = new Vue({
    el: '#admin_panel',
    data: data
}); 
