<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  export let showModal = false;

  let dispatch = createEventDispatcher();

  /* handle close modal window */
  function closeModal() {
    // help set showModal = false;
    dispatch("closeModal", false);
  }
</script>

<aside class="modal" class:show-modal={showModal} transition:fade>
  <div class="modal-content">
    <div class="close-modal-container">
      <span class="close-modal" on:click={closeModal} on:keydown={closeModal}>&#10005;</span>
    </div>
    <!-- modal contents -->
    <slot />
  </div>
</aside>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 30%);
    z-index: 15;
  }

  .close-modal-container {
    position: relative;
    padding: 1em;
    width: 100%;
  }

  .close-modal {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    background-color: var(--clr-light-grey);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    transition: background-color 500ms ease;
  }

  .close-modal:active {
    animation: clickBtn 500ms ease;
  }

  .close-modal:hover {
    background-color: var(--clr-off-white);
  }

  .modal-content {
    position: relative;
    background-color: var(--clr-white);
    border-radius: 8px;
    padding: 1em;
    width: 50%;
  }

  .show-modal {
    display: flex;
  }

  @media (max-width: 500px) {
    .modal-content {
      width: 95%;
    }
  }
</style>