<template>
    <div id="live-class" />
</template>

<script>
    import App from '../components/agora';

    export default {
        created() {
            const app = new App();
            app.setupClassroom();
        },
    };
</script>
