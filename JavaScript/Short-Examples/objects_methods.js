let usersObj = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

  console.log(usersObj)

  function countOnline(users) {
    // Only change code below this line
    let online_users = 0
   //console.log(users.Alan.online)
    for (let user in users){
        if (users[user].online === true){
            online_users += 1
        }
    }
    console.log(online_users)
      
  }

  countOnline(usersObj)