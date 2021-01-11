<script lang="ts">
  export let isFullWidth: boolean = false;
  export let u: string = 'f2bfce3d5da41bb17bd8659d0';
  export let id: string = '4fa27f25e6';

  const action = `https://abc.us7.list-manage.com/subscribe/post?u=${u}&amp;id=${id}`;
  const name = `b_${u}_${id}`;
</script>

<style lang="scss">
  form {
    padding: 0 !important;
  }

  .fields {
    display: flex;
    flex-direction: column;
    justify-content: stretch;

    @media (min-width: 641px) {
      form.is-full-width & {
        flex-direction: row;
      }
    }
  }

  .fields > * {
    flex: 1 1 100%;
    border: 0.125rem solid #111;
    padding: 0.5rem;
    font-size: 1rem;
    font-family: ABCSans, sans-serif;

    @media (min-width: 641px) {
      form.is-full-width & {
        flex: 1 1 auto;
      }
    }

    form.is-full-width & {
      font-size: 1.25rem;
    }
  }

  .fields > button {
    margin: 0.75rem 0 0 0;
    border-radius: 0;
    background: #111;
    color: #fff;
    cursor: pointer;

    @media (min-width: 641px) {
      form.is-full-width & {
        margin: 0 0 0 0.75rem;
      }
    }
  }
</style>

<form {action} method="post" role="form" target="_blank" class:is-full-width={isFullWidth} class:u-layout={isFullWidth}>
  <div style="position: absolute; left: -5000px;" aria-hidden="true">
    <input type="text" {name} tabindex="-1" value="" />
  </div>
  <div class="fields">
    <input
      required
      type="email"
      aria-label="Email"
      autocapitalize="off"
      autocorrect="off"
      value=""
      placeholder="you@example.com"
      name="EMAIL"
      id="mce-EMAIL" />
    <button type="submit" name="subscribe">Subscribe</button>
  </div>
</form>
