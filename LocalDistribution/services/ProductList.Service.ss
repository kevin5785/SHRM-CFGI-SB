/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/*exported service*/
// product-list.ss
// ----------------
// Service to manage product list requests
function service (request)
{
	'use strict';

	var Application = require('Application')
	,	ProductList = require('ProductList.Model');

	try
	{
		//We've got to disable passwordProtectedSite and loginToSeePrices features if customer registration is disabled.
		//Note that this condition is expressed with 'registrationmandatory' property being 'T'
		var isRegistrationDisabled = session.getSiteSettings(['registration']).registration.registrationmandatory === 'T';

		if (isRegistrationDisabled || !SC.Configuration.passwordProtectedSite || session.isLoggedIn2())
		{
		var context = nlapiGetContext()
		,	role = context.getRoleId()
		,	method = request.getMethod()
		,	data = JSON.parse(request.getBody() || '{}')
		,	id = request.getParameter('internalid') || data.internalid
		,	user = session.isLoggedIn2() ? nlapiGetUser() : 0;

		// This is to ensure customers can't query other customer's product lists.
		if (role !== 'shopper' && role !== 'customer_center')
		{			
			user = parseInt(request.getParameter('user') || (data.owner && data.owner.id) || user, 10);
		}

		switch (method)
		{
			case 'GET':
				if (id)
				{
					if (id === 'later')
					{
						Application.sendContent(ProductList.getSavedForLaterProductList(user));
					}
					else if (id === 'quote')
					{
						Application.sendContent(ProductList.getRequestAQuoteProductList(user));
					}
					else
					{
						Application.sendContent(ProductList.get(user, id));
					}
				}
				else
				{
					Application.sendContent(ProductList.search(user, 'name'));
				}
			break;

			case 'POST':
				var internalid = ProductList.create(user, data);

				Application.sendContent(ProductList.get(user, internalid), {'status': 201});
			break;

			case 'PUT':
				ProductList.update(user, id, data);
				Application.sendContent(ProductList.get(user, id));
			break;

			case 'DELETE':
				ProductList.delete(user, id);
				Application.sendContent({'status': 'ok'});
			break;

			default:
				// methodNotAllowedError is defined in ssp library commons.js
				Application.sendError(methodNotAllowedError);
		}
	}
		else
		{
			// unauthorizedError is defined in ssp library commons.js
			Application.sendError(unauthorizedError);
		}
	}
	catch (e)
	{
		Application.sendError(e);
	}
}