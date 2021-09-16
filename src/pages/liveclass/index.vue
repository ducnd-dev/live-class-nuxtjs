<template>
    <div id="live-class" />
</template>
<script>
    import App from '../../components/agora';

    export default {
        name: 'LiveClass',
        mounted() {
            const elm = document.getElementById('live-class');
            const app = new App(elm);
            app.setupClassroom();
        },
    };
</script>
