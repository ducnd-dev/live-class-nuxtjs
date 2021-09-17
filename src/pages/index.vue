<template>
    <div>
        <el-form :model="formData" class="flex flex-col p-1 m-auto max-w-md">
            <el-form-item label="Room">
                <el-input v-model="formData.roomName" placeholder="room name" />
            </el-form-item>
            <el-form-item class="pl-1" label="Name">
                <el-input v-model="formData.userName" placeholder="name" />
            </el-form-item>
            <el-form-item label="Type">
                <el-select v-model="formData.roomType">
                    <el-option
                        v-for="item in roomType"
                        :key="item.id"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-form-item class="flex-col" label="Role">
                <el-select v-model="formData.roleType">
                    <el-option
                        v-for="item in roleType"
                        :key="item.id"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-button class="el-button" @click="handleSubmit">
                Live class
            </el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    roomName: '',
                    userName: '',
                    roomType: '',
                    roleType: '',
                },
                roomType: [
                    { id: 1, label: 'One-to-one Classroom', value: 0 },
                    { id: 2, label: 'Lecture Hall', value: 2 },
                    { id: 3, label: 'Small Classroom', value: 4 },
                ],
                roleType: [
                    { id: 1, label: 'Teacher', value: 1 },
                    { id: 2, label: 'Student', value: 2 },
                ],
            };
        },
        created() {
            console.log(this.$store.state.room.configRoom);
        },
        methods: {
            async handleSubmit() {
                if (!this.formData.userName || !this.formData.roleType) {
                    this.$message.error('Nhập đủ thông tin');
                    return;
                }
                try {
                    const result = await this.$axios.get(
                        `https://api-solutions.sv3sbm.agoralab.co/edu/v2/users/${this
                            .formData.userName + this.formData.roleType}/token`,
                    );
                    this.formData = { ...this.formData, ...result.data.data };
                    this.$store.dispatch('room/setConfigRoom', this.formData);
                    this.$router.push('/liveclass');
                } catch (error) {
                    console.log(error);
                }
            },
        },
    };
</script>
