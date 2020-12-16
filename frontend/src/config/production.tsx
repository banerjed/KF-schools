// Place the URL here with the /api suffix.
// Ex.:`https://domain.com/api`;
const backendUrl = `https://school-service-dot-kf-apps-288002.uc.r.appspot.com/api`;

/**
 * Frontend URL.
 */
const frontendUrl = {
  host: 'kf-school.web.app',
  protocol: 'https',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'multi';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = false;
const stripePublishableKey = '';

export default {
  frontendUrl,
  backendUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey
};
