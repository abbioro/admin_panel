var data = {
    users: [],
    checkedUsers: [],
    lastRefresh: Date()
};

var vm = new Vue({
    el: '#admin_panel',
    data: data,
    created: function () {
        this.getUsers();
    },
    methods: {
        getUsers: function () {
            axios.get('/users').then((res) => {
                data.users = res.data;
                data.lastRefresh = Date();
            });
        },
        setEnabled: function (value) {
            var payload = {
                userIds: this.checkedUsers,
                action: 'setEnabled',
                value: value
            };

            axios.patch('/users', payload).then(function (res) {
                data.users = res.data;
                data.lastRefresh = Date();
            });
        },
        checkboxClicked: function (event) {
            // If holding shift and this was not the first click
            if (event.shiftKey && this.prevClickedCheckbox) {
                // Don't select any text
                document.getSelection().removeAllRanges();

                var clickedId = Number(event.target.value);
                var prevClickedId = Number(this.prevClickedCheckbox.value);
                var selectedIds = [];

                // If the clicked checkbox was above the last clicked checkbox
                // we need to swap the range arguments. Also add 1 to make the
                // range inclusive of all the ids in the selection
                if (clickedId < prevClickedId) {
                    selectedIds = range(clickedId, prevClickedId + 1);
                } else {
                    selectedIds = range(prevClickedId, clickedId + 1);
                }

                // If clicked checkbox was checked: remove all, else add all
                if (this.checkedUsers.includes(clickedId)) {
                    this.checkedUsers = this.checkedUsers.filter(id => {
                        return !selectedIds.includes(id);
                    });
                } else {
                    this.checkedUsers = this.checkedUsers.concat(selectedIds);
                }
            }

            // Save the click
            this.prevClickedCheckbox = event.target;
        },
        toggleAll: function (event) {
            if (this.checkedUsers.length === 0) {
                var allIds = range(1, this.users.length + 1);
                this.checkedUsers = this.checkedUsers.concat(allIds);
            } else {
                this.checkedUsers = [];
            }
        }
    }
});

// Create a range from [start, end)
function range(start, end) {
    var arr = [];

    for (var i = start; i < end; i++) {
        arr.push(i);
    }

    return arr;
}
