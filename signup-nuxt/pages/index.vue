<template>
  <div id="signup">
    <header id="header">
      <hgroup>
        <h1>
          <img src="~assets/img/logo.svg" alt="The Cable">
        </h1>
        <h2>Join 2,600 people building a new kind of newspaper </h2>
      </hgroup>
      <p class="highlight">
        All members become co-owners of the Bristol Cable, with exclusive opportunities to have a say while supporting quality journalism and our innovative model.
      </p>
    </header>
    <nav>
      <ul>
        <li>
          <button class="active text" type="button">
            Monthly
          </button>
        </li><li>
          <button class="text" type="button">
            Annually
          </button>
        </li>
      </ul>
    </nav>
    <form action="" method="get">
      <section id="amount">
        <div class="grid">
          <p class="set-amount">
              <span class="placeholder-currency">£</span>
              <span class="placeholder-regularity">/month</span>
              <input class="input" type="number" id="custom-amount" name="custom-amount"
                    autofocus
                    placeholder="5"
                    value="5"
                    min="3" step="1">
             <!--
             https://stackoverflow.com/questions/45396280/customizing-increment-arrows-on-input-of-type-number-using-css
            -->
            <span class="amount-controls">
              <button onclick="document.querySelector('input#custom-amount').stepUp()" class="button" type="button">▲</button>
              <button onclick="document.querySelector('input#custom-amount').stepDown()" class="button" type="button">▼</button>
            </span>
          </p>
          <div class="other-amounts stacked-button-group">
            <p>
              <button class="button hollow number" type="button" onclick="document.querySelector('#custom-amount').value = 3">
                £3
              </button>
            </p>
            <p>
              <button class="button hollow number" type="button" onclick="document.querySelector('#custom-amount').value = 5">
                £5
              </button>
            </p>
            <p>
              <button class="button hollow number" type="button" onclick="document.querySelector('#custom-amount').value = 10">
                £10
              </button>
            </p>
          </div>
        </div><!-- /.grid -->
        <p><small>Chip in a £3/month or more and get the Cable quarterly print edition sent directly to your door.</small></p>
      </section><!-- /#amount -->
      <section id="account-data">
        <header>
          <h4>Member account</h4>
          <p><small>Are you a member already? <a href="">Log in here</a>.</small></p>
        </header>
        <fieldset>
          <p>
            <label for="email">Email</label>
            <input class="input" type="email" name="email" id="email" required>
          </p>
          <p>
            <label for="pass">Password</label>
            <input class="input" type="password" id="pass" name="password"
             minlength="8" required>
          </p>
          <p class="checkbox">
            <input type="checkbox" id="no-account" name="no-account">
            <label for="no-account">I don't want to create a member account.</label>
          </p>
        </fieldset>
      </section><!-- /#account-data -->

      <section id="payment">
        <header>
          <h4>Payment method</h4>
        </header>
        <div>
          <p><i class="fa fa-lock" aria-hidden="true"></i> <small>Your payment will be processed securely with GoCardless under the Direct Debit Guarantee scheme.</small>
          </p>
          <p class="checkbox">
            <input type="checkbox" id="service-fees" name="service-fees">
            <label for="service-fees">Our payment processor charges us per transaction, which means we receive less from monthly contributions. Are you happy to absorb the 23p transaction fee? Alternatively you could pay annually.
            </label>
          </p>
        </div>
      </section><!-- /#payment -->
      <p id="submit-form">
        <input class="button" type="submit" value="Contribute €12 monthly via GoCardless">
      </p>
      <p class="text-center"><small>By proceeding, you are accepting the <a href="">Terms of Service</a>
        and <a href="">Privacy Policy</a>.</small>
      </p>
    </form>
    <footer id="footer">
      <p>
        When you join the Cable, you support a new kind of newspaper for Bristol.
      </p>
      <p>
        We are 100% owned by thousands of local people. We produce quality local journalism in print and online, free to access for all.
        <a href="">Read more</a></p>
    </footer>
    <script>
      /* collapsible cards - payment methods */
      var selectedPayments = document.getElementsByName('payment');

      function activePayment() {
        for (selectedPayment of selectedPayments) {
          if(selectedPayment.checked == true) {
              selectedPayment.parentElement.parentElement.classList.add('active');
          } else {
              selectedPayment.parentElement.parentElement.classList.remove('active');
          }
        }
      };
    </script>
  </div>
</template>
