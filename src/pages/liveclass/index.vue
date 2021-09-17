<template>
    <div id="live-class" />
</template>
<script>
    import App from '../../components/agora';

    export default {
        name: 'LiveClass',
        mounted() {
            const config = this.$store.state.room.configRoom;
            if (config && config.appId) {
                const elm = document.getElementById('live-class');
                const app = new App(elm, config);
                app.setupClassroom();
            } else {
                this.$router.push('/');
            }
        },
    };
</script>
