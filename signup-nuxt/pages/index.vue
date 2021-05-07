<template>
  <div id="signup">
    <header id="header">
      <h1>
        <img src="img/newspaper-logo.svg" alt="The Newspaper"
          onerror="this.src='/img/aid2growth-logo.png'">
      </h1>
      <div>
        <h2 class="logo">THE NEWSPAPER</h2>
        <p class="highlight">Join 2,500 people building a new kind of newspaper!</p>
      </div>
    </header>
    <nav>
      <ul>
        <li>
          <button class="text" type="button">
            One time
          </button>
        </li><li>
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
        <p class="set-amount">
            <span class="placeholder-currency">€</span>
            <span class="placeholder-regularity">/month</span>
            <input class="active input" type="number" id="custom-amount" name="custom-amount"
                  autofocus
                  placeholder="12"
                  value="12"
                  min="5" step="1">
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
            <button class="button hollow number" type="button" onclick="document.querySelector('#custom-amount').value = 5">
              €5
            </button>
          </p>
          <p>
            <button class="button hollow number" type="button" onclick="document.querySelector('#custom-amount').value = 12">
              €12
            </button>
          </p>
          <p>
            <button class="button hollow number" type="button" onclick="document.querySelector('#custom-amount').value = 25">
              €25
            </button>
          </p>
        </div>
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
        <fieldset>
          <div class="card">
            <p class="card-header radio">
              <input type="radio" id="payment-card" name="payment" value="card"
                onclick="activePayment()">
              <label for="payment-card">
                <i class="fa fa-credit-card" aria-hidden="true"></i>
                Credit/Debit Card
              </label>
            </p>
            <div class="collapsible-card">
              <p><small>You will be taken to GoCardless to confirm your payment details, after
                which you will be returned here to complete the process.</small>
              </p>
              <p class="checkbox">
                <input type="checkbox" id="service-fees" name="service-fees">
                <label for="service-fees"> Agree to pay 2.23€ for processing fees.
                  This is an expense we incur for payment processing, and we would be thankful
                  for your generosity in covering it.
                </label>
              </p>
            </div>
          </div><!-- /.card -->
          <div class="card">
            <p class="card-header radio">
              <input type="radio" id="payment-debit" name="payment" value="payment-debit"
                onclick="activePayment()">
              <label for="payment-debit">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                Direct debit
              </label>
            </p>
            <div class="collapsible-card">
              <p><small>You will be taken to GoCardless to confirm your payment details, after
                which you will be returned here to complete the process.</small>
              </p>
              <p class="checkbox">
                <input type="checkbox" id="service-fees" name="service-fees">
                <label for="service-fees"> Agree to pay 2.23€ for processing fees.
                  This is an expense we incur for payment processing, and we would be thankful
                  for your generosity in covering it.
                </label>
              </p>
            </div>
          </div> <!-- /.card -->
          <div class="card">
            <p class="card-header radio">
              <input type="radio" id="payment-paypal" name="payment" value="payment-paypal"
                onclick="activePayment()">
              <label for="payment-paypal">
                <i class="fa fa-paypal" aria-hidden="true"></i>
                Paypal
              </label>
            </p>
            <div class="collapsible-card">
              <p><small>You will be taken to GoCardless to confirm your payment details, after
                which you will be returned here to complete the process.</small>
              </p>
              <p class="checkbox">
                <input type="checkbox" id="service-fees" name="service-fees">
                <label for="service-fees"> Agree to pay 2.23€ for processing fees.
                  This is an expense we incur for payment processing, and we would be thankful
                  for your generosity in covering it.
                </label>
              </p>
            </div>
          </div> <!-- /.card -->
        </fieldset>
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
        By becoming a supporting member, you'll be able to cook perfect carbonara, fly at a height of 2 meters and help fix the problems in modern journalism!</p>

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
