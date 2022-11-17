<script>
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";
  
  export let alertType = 'warning';
  export let alertMsg = 'some alert message text';
  export let alertShow = false;
  
  let dispatch = createEventDispatcher();

  /* help close alert message */
  function closeAlert() {
    // set alertShow = false
    dispatch("closeAlert", false);
  }
</script>

<div class="alert-container" class:show-alert={alertShow === true}>
  <div class="alert" in:fly out:fade 
    class:alert-success={alertType === 'success'} 
    class:alert-danger={alertType === 'danger'} 
    class:alert-warning={alertType === 'warning'} 
    class:alert-info={alertType === 'info'}>
    <div class="alert-icon">
      {#if alertType === 'success'}
        <div>🎉</div>
      {:else if alertType === 'info'}
        <div>📣</div>
      {:else if alertType === 'warning'}
        <div>⚠</div>
      {:else if alertType === 'danger'}
        <div>🛑</div>
      {/if}
    </div>
    <div class="alert-msg">
      {alertMsg}
    </div>
    <div class="close-alert">
      <div on:keydown={closeAlert}>&#10005;</div>
    </div>
  </div>
</div>

<style>
  .alert-container {
    display: none;
    position: absolute;
    padding: 1em;
    z-index: 10;
  }
  .alert {
    display: flex;
    justify-content: space-between;
    gap: 0.5em;
    padding: 1em;
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
    background-color: rgb(30 33 50 / 20%);
    color: var(--clr-text);
  }
  .alert-icon {
    font-size: 2em;
    text-align: center;
  }
  .alert-msg {
    font-size: 16px;
    font-weight: 600;
  }
  .close-alert {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .close-alert div {
    padding: 0.1em;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    text-align: center;
    background-color: rgb(209 219 235);
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
  } 
  .close-alert div:active {
    animation: clickBtn 500ms ease;
  }
  .alert-info {
    background-color: var(--accent-info-lite);
    color: var(--accent-info);
  }
  .alert-success {
    background-color: var(--accent-success-lite);
    color: var(--accent-success);
  }
  .alert-warning {
    background-color: var(--accent-warning-lite);
    color: var(--accent-warning);
  }
  .alert-danger {
    background-color: var(--accent-danger-lite);
    color: var(--accent-danger);
  }
  .alert-info .close-alert div {
    background-color: rgb(183 195 213);
  }
  .alert-success .close-alert div {
    background-color: rgb(194 217 203);
  }
  .alert-warning .close-alert div {
    background-color: rgb(247 251 229);
  }
  .alert-danger .close-alert div {
    background-color: rgb(217 193 179);
  }
  .show-alert {
    display: flex;
  }
</style>