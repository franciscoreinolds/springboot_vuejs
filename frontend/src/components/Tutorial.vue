<template>
    <div
    class = "card"
    >
        <h3>Title: {{tutorial_info.title}}</h3>
        <h4>Description: {{tutorial_info.description}}</h4>
    </div>
</template>

<script>
export default {
    name : "Tutorial",
    props : [
        "tutorial_info",
    ],
    data() {
        return {
            title: '',
            description : '',
        }
    },
}
</script>

<style>

.card {
    max-width : "50px";
    height: "300px";
    background-color : "#aaaaaa";
    border : 1px solid black;
    margin : auto;
}

</style>