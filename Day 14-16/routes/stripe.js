const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51JeVwKSBGYkOk740ChxAxyj77bZz5z2aMgb19warlIGuC3u0lZ2pwSoqZXN2YyRdxeXEfPq0KudVbcwxxxgFgAH700O6nW0Z5j"
);
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  console.log(req.body);
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: req.body.price * 100,
          name: "Shopping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      // mode: "payment",
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      //req.headers.origin -> currently server is running
      cancel_url: `${req.headers.origin}?canceled=true`,
    });
    // console.log(session);
    res.redirect(303, session.url);
  } catch (err) {
    //res.status(500).send({err})
    res.status(err.statusCode || 500).json(err.message);
  }
});

module.exports = router;
