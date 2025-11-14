import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (priceId, customerId) => {
  try {
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXTAUTH_URL}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/subscribe/cancelled`,
      metadata: {
        userId: customerId,
      },
    });

    return session;
  } catch (error) {
    throw new Error(`Erreur création session: ${error.message}`);
  }
};

export const createCustomerPortalSession = async (customerId) => {
  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXTAUTH_URL}/account`,
    });

    return session;
  } catch (error) {
    throw new Error(`Erreur portail client: ${error.message}`);
  }
};

export const handleWebhookEvent = async (event) => {
  switch (event.type) {
    case 'checkout.session.completed':
      // Activer l'abonnement utilisateur
      break;
    case 'customer.subscription.updated':
      // Mettre à jour le statut d'abonnement
      break;
    case 'customer.subscription.deleted':
      // Désactiver l'abonnement
      break;
    case 'invoice.payment_succeeded':
      // Confirmer le paiement
      break;
    default:
      console.log(`Type d'événement non géré: ${event.type}`);
  }
};

export default stripe;