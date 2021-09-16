<template>
    <div id="live-class" />
</template>

<script>
    import App from '../components/agora';

    export default {
        created() {
            window.addEventListener('load', () => {
                const app = new App(document.getElementById('live-class'));
                app.setupClassroom();
            });
        },
    };
</script>
