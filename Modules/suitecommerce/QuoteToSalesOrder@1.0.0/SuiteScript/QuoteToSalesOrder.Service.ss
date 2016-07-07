/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/*exported service*/
// Service to manage quote to sales order request
function service (request)
{
	'use strict';

	var Application = require('Application');

	try
	{
		var method = request.getMethod()
		,	quoteToSalesOrderModel = require('QuoteToSalesOrder.Model')
		,	quote_id = request.getParameter('quoteid')
		,	data = JSON.parse(request.getBody() || '{}');

		if (!~request.getURL().indexOf('https') || session.isLoggedIn2())
		{
			switch (method)
			{
				case 'GET':
					Application.sendContent(quoteToSalesOrderModel.get(quote_id));
				break;

				case 'PUT':
					// Pass the data to the quoteToSalesOrderModel's update method and send it response
					quoteToSalesOrderModel.update(quote_id, data);

					Application.sendContent(quoteToSalesOrderModel.get(quote_id, true));
				break;

				case 'POST':
					// Updates the order with the passed in data
					quoteToSalesOrderModel.update(quote_id, data);

					// Gets the status
					var order_info = quoteToSalesOrderModel.get(quote_id, true);

					// Finally Submits the order
					order_info.confirmation = quoteToSalesOrderModel.submit();
					//Override tempid with the real sales order id that have been created
					order_info.internalid = order_info.confirmation.internalid;

					Application.sendContent(order_info);
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