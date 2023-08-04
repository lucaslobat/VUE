<template>
    <dialog ref="dialog" class="modal">
        <div class="modal-content">
            <slot name="title">
            </slot>

            <slot name="body">
                <div>Modal body</div>
            </slot>

            <slot>
                <button @click="closeModal">Close</button>
            </slot>
        </div>
    </dialog>
</template>

<script>
export default {

    methods: {
        showModal() {
            this.$refs.dialog.showModal();
        },
        closeModal(){
            this.$refs.dialog.close();
        }
    },
    mounted() {
        this.showModal();
    }
}

</script>


<style>
.modal {
    padding:2rem;
    border-radius: 0.25rem;
    z-index:10;
    max-width:20%
}

dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */ ;
}
</style>