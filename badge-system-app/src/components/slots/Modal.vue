<template>
    <dialog ref="dialog" class="modal">
        <div class="modal-content">
            <slot name="title">
            </slot>

            <slot name="body">
                <div>Modal body</div>
            </slot>

            <slot>
                <button>Close</button>
            </slot>
        </div>
    </dialog>
</template>

<script>
export default {

    methods: {
        showModal() {
            this.$refs.dialog.showModal();
        }
    },
    mounted() {
        this.showModal();
    }
}

</script>


<style>
.modal {
    display: flex;
    padding: 2rem;
    border-radius: 0.5rem;
    border-style: none;
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}

.modal-content {
    display: flex;
    
    flex-direction: column;
    background-color: #fefefe;
    padding: 2rem;
    border-radius: 0.2rem;
    max-width: 30rem;
    max-height: 20rem;
}
</style>