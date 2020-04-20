<template>
    <div>
        <h1>
            Home
        </h1>

        <ul>
            <li
            v-for="(tutorial, index) in tutorials"
            :key="index"
            >
                <Tutorial :tutorial_info="tutorial" />
            </li>
        </ul>

        <br>

        <h1>
            Add Tutorial
        </h1>

        <form onsubmit = "return false">
            <input v-model="title" placeholder="Title">
            <br>
            <textarea v-model = "description" name="description" id="desc" cols="30" rows="10">
                
            </textarea>
            <br>
            <button
            @click="addTutorial"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import Tutorial from '../components/Tutorial.vue';

export default {
    name : "Home",
    components : {
        Tutorial
    },
    data() {
        return {
            tutorials_link : 'http://localhost:9000/api/tutorials',
            tutorials : [],
            title : '',
            description : '',
            message : ''
        }
    },
    created() {
        fetch(this.tutorials_link, {
            method: 'GET',
            headers : {
                'Access-Control-Allow-Origin': '*',
                /*
                'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
                'Content-Type': 'application/json',
                */
                'Accept': 'application/json'
            }
        }).then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            };
            response.json().then((data) => {
                console.log(data);
                this.tutorials = data;
            })
        })
        .catch(function(err){
            console.log("Fetched error " + err);
        });
    },
    methods: {
        addTutorial() {
            var tutorial = {
                "title" : this.title,
                "description" : this.description,
                "published" : true
            };
            var str = JSON.stringify({tutorial});
            //console.log(tutorial)
            console.log(str);
            fetch(this.tutorials_link, {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "title" : this.title,
                    "description" : this.description,
                    "published" : true
                })
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log("Error -> " + error);
            })
        }
    }
}
</script>