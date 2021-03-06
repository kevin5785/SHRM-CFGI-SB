/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/*exported service*/
// TransactionHistory.Service.ss
// ----------------
// Service to list transactions
function service (request)
{
	'use strict';
	
	var Application = require('Application');

	try
	{
		// Only can get a order item if you are logged in
		if (session.isLoggedIn2())
		{
			var method = request.getMethod()
			,	permissions = Application.getPermissions().transactions
			,	TransactionHistory = require('TransactionHistory.Model');

			if (permissions.tranFind > 0 && (permissions.tranCustInvc > 0 || permissions.tranCustCred > 0 || permissions.tranCustPymt > 0 || permissions.tranCustDep > 0 || permissions.tranDepAppl > 0))
			{
				switch (method)
				{
					case 'GET':
						Application.sendContent(TransactionHistory.list({
							filter: request.getParameter('filter')
						,	order: request.getParameter('order')
						,	sort: request.getParameter('sort')
						,	from: request.getParameter('from')
						,	to: request.getParameter('to')
						,	page: request.getParameter('page') || 1
						}));
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
			// unauthorizedError is defined in ssp library commons.js
			Application.sendError(unauthorizedError);
		}
	}
	catch (e)
	{
		Application.sendError(e);
	}
}
