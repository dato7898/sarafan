<template>
    <div>
        <input type="text" placeholder="Write something" v-model="text" />
        <input type="button" value="Save" @click="save" />
    </div>
</template>

<script>
    import { sendMessage } from "util/ws";

    export default {
        props: ['messages', 'messageAttr'],
        data() {
            return {
                text: '',
                id: ''
            }
        },
        watch: {
            messageAttr(newVal, oldVal) {
                this.text = newVal.text
                this.id = newVal.id
            }
        },
        methods: {
            save() {
                sendMessage({ id: this.id, text: this.text })
                this.id = ''
                this.text = ''

                /*const message = {text: this.text}

                if (this.id) {
                    fetch(`/message/${this.id}`, {
                        method: 'PUT',
                        body: JSON.stringify(message),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).then(result => {
                        result.json().then(data => {
                            const index = getIndex(this.messages, data.id)
                            this.messages.splice(index, 1, data)
                            this.text = ''
                            this.id = ''
                        })
                    })
                } else {
                    fetch('/message', {
                        method: 'POST',
                        body: JSON.stringify(message),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).then(result => {
                        result.json().then(data => {
                            this.messages.push(data)
                            this.text = ''
                        })
                    })
                }*/
            }
        }
    }
</script>

<style>

</style>