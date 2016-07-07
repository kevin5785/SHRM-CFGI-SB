/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/* exported service */
function service (request)
{
	'use strict';

	var Application = require('Application');

	try
	{		
		if (session.isLoggedIn2())
		{
			var permissions = Application.getPermissions().transactions;
			
			if (permissions.tranEstimate > 0 && permissions.tranFind > 0)
			{
				var method = request.getMethod()
				,	id = request.getParameter('internalid')
				,	quote_model = require('Quote.Model')
				,	data = JSON.parse(request.getBody() || '{}');

				switch (method)
				{
					case 'GET':
						if (id)
						{
							Application.sendContent(quote_model.get('estimate', id));
						}
						else
						{
							Application.sendContent(quote_model.list({
							filter: request.getParameter('filter')
						,	order: request.getParameter('order')
						,	sort: request.getParameter('sort')
						,	from: request.getParameter('from')
						,	to: request.getParameter('to')
							,	page: request.getParameter('page') || 1
							,	types: request.getParameter('types')
						}));
						}
					break;
					case 'PUT':
						// Pass the data to the quote_model's update method and send it response
						quote_model.update('estimate', data.internalid, data);

						Application.sendContent(quote_model.get('estimate', data.internalid));
					break;

					case 'POST':
						// Updates the order with the passed in data
						quote_model.update('estimate', data.internalid || 'null', data);

						// Gets the status
						var order_info = quote_model.get('estimate', data.internalid || 'null');

						// Finally Submits the order
						order_info.confirmation = quote_model.submit();
						// //Override tempid with the real sales order id that have been created
						// order_info.internalid = order_info.confirmation.internalid;

						Application.sendContent(order_info);
					break;

					default: 
						Application.sendError(methodNotAllowedError);
				}
			}
			else
			{
				Application.sendError(forbiddenError);
			}
		}
		else
		{
			Application.sendError(unauthorizedError);			
		}
	}
	catch (e)
	{
		Application.sendError(e);
	}
}