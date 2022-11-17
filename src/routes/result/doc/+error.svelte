<script>
  import { page } from "$app/stores"
</script>

<div class="error-container">
  <div class="msg">
    <h1>{$page.error.message}</h1>
  </div>
</div>

<style>
  .error-container {
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }
  .msg {
    border-radius: 5px;
    background-color: var(--clr-white);
    padding: 2em;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
</style>