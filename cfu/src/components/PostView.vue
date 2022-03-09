<template>

<div>
    <div v-if="show == 1">
        <button @click="show++" type="button" class="btn btn-warning">add your post</button>
        <div v-for="post in postList" :key="post">
            <div class="post">
                <div class="post-header">
                <span class="profile-name">🇺🇦 {{ post.username }}</span>
                </div>
                <div class="post-body" :style="{ backgroundImage : `url(${post.postImage})` }"></div>
                <div class="post-content">
                <button class="likes-btn" @click="isClicked ? post.likes-- : post.likes++"> ❤️ {{post.likes}} </button>
                <p><strong>{{ post.username }} </strong>{{ post.content }}</p>
                <p class="date">{{ post.date }}</p>
                </div>
            </div> 
        </div>
    </div>

    <div v-if="show == 2">
        <form action="/addpost" method="post">
            <input @change="imgUpload" type="file" id="file" class="inputfile" />
                <label for="file" class="input-quote">add your post</label>

            <!-- post image -->
            <div :class="upload-image" :style="{backgroundImage : `url(${imgUrl})`}"></div>
    
            <!-- username -->
            <div>
                <h3 class="join_title"><label for="username">username</label></h3>
                <span class="box int_name">
                    <input type="text" v-model="username" id="username" class="int" maxlength="10" autocomplete="off">
                </span>
            </div>

            <!-- password -->
            <div>
                <h3 class="join_title"><label for="pswd1">password</label></h3>
                <span class="box int_pass">
                    <input type="password" v-model="password" id="password" class="int" maxlength="20" autocomplete="new-password">
                </span>
            </div>

        </form>
    </div>

</div>

</template>

<script>
export default {
    name: "PostView",
    data() {
        return {
            show : 1,
            imgUrl : '',
            username : '',
            password : '',
            isClicked : false,
        }
    },
    props: {
        'postList': Array,
    },
    methods: {
        imgUpload(img) {
            let file = img.target.files;
            this.imgUrl = URL.createObjectURL(file[0]);
        }
    }
}
</script>

<style scoped>
button {
    margin: 5px;
}
.post {
  width: 60%;
  margin: 0 auto;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 20px;
  font-weight: bold;
}
.post-header {
  height: 30px;
  padding: 10px;
  margin-bottom: 20px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  text-align: left;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
  text-align: left;
} 
.inputfile {
  display: none;
}
.input-quote {
    background-color: #FCDC48;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    margin: 5px;
}
.upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
}
.likes-btn {
    padding: 5px;
    background-color: white;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
}
</style>