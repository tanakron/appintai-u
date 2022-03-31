<template>
<v-main>
    <v-container>
        <v-row class="pt-5">
            <v-card max-width="344" class="mx-auto  " dark>
                <v-img src="https://cdn5.vectorstock.com/i/1000x1000/63/79/neon-lamp-frame-on-brick-wall-background-las-vector-30496379.jpg" height="200px" />
                <v-card-text>
                    <v-form @submit.prevent="submit"> 
                        <v-text-field name="username" label="Username" id="usersname" v-model="account.username" :rules="usernameRules">

                        </v-text-field>
                        <v-text-field name="password" label="Password" id="password" v-model="account.password" :append-icon="isShowPassword?'visibility':'visibility_off' " @click:append="isShowPassword = ! isShowPassword" :type="isShowPassword ? 'text': 'password' " counter>

                        </v-text-field>
                        <br>
                        <v-row class="justify-space-between px-2">
                            <v-colr>
                                <v-btn color="primary" @click.prevent="$router.push('/register')" dark>Register</v-btn>
                                <v-btn  type="submit" dark>Login</v-btn>
                            </v-colr>

                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</v-main>
</template>

<script>
export default {
    data() {
        return {
            isShowPassword: false,
            account: {
                username: "",
                password: ""
            },
            usernameRules:[v1=>!!v1 ||"User reqried", ],
        }

    },
    methods: {
        submit() {
            alert(JSON.stringify(this.account))
        }
    },
}
</script>

<style>

</style>
