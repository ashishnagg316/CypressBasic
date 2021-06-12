Feature: End to End Mobilekart validation

    purchase flow

    @Regression
    Scenario: checkout flow
    Given open mobilekart page
    When add items to cart
    And validate the total price with cart sum price
    Then select country and checkout
    And validate order placed success message

    @Smoke
    Scenario: home page flow
    Given open home page url
    When enter person details
    Then validate the details