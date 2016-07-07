/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Invoice.Model.js
// ----------
// Handles fetching invoices
define(
	'Invoice.Model'
,	[	'Application'
	,	'Utils'
	,	'Transaction.Model'

	,	'underscore'
	]
,	function (
		Application
	,	Utils
	,	TransactionModel

	,	_
	)
{
	'use strict';

	return TransactionModel.extend({
	
		name: 'Invoice'

	,	setExtraListColumns: function ()
		{
			if (this.isMultiCurrency)
			{
				this.columns.amount_remaining = new nlobjSearchColumn('formulanumeric').setFormula('{amountremaining} / {exchangerate}');
			}
			else
			{
				this.columns.amount_remaining = new nlobjSearchColumn('amountremaining');
			}

			this.columns.closedate = new nlobjSearchColumn('closedate');
			this.columns.duedate = new nlobjSearchColumn('duedate');
		}

	,	setExtraListFilters: function ()
		{
			var status = this.data.status;
			
			if (status)
			{
				var value = null;

				switch (status)
				{
					case 'open':
						value = 'CustInvc:A';
					break;

					case 'paid':
						value = 'CustInvc:B';
					break;
				}

				if (value)
				{
					this.filters.status_operator = 'and';
					this.filters.status = ['status', 'anyof', value];
				}				
			}

		}

	,	mapListResult: function (result, record)
		{			
			var due_date = record.getValue('duedate')
			,	close_date = record.getValue('closedate')
			,	due_in_milliseconds = new Date(due_date).getTime() - this.now;
		
			result.amountremaining = Utils.toCurrency(record.getValue(this.columns.amount_remaining));
			result.amountremaining_formatted = Utils.formatCurrency(record.getValue(this.columns.amount_remaining));
			result.closedate = close_date;
			result.closedateInMilliseconds = new Date(close_date).getTime();
			result.tranDateInMilliseconds = new Date(record.getValue('trandate')).getTime();
			result.duedate = due_date;
			result.dueinmilliseconds = due_in_milliseconds;
			result.isOverdue = due_in_milliseconds <= 0 && ((-1 * due_in_milliseconds) / 1000 / 60 / 60 / 24) >= 1;
			
			return result;
		}

	,	getExtraRecordFields: function ()
		{
			this.getAdjustments();
			this.getSalesRep();

			this.result.purchasenumber = this.record.getFieldValue('otherrefnum');
			this.result.dueDate = this.record.getFieldValue('duedate');
			this.result.amountDue = Utils.toCurrency(this.record.getFieldValue('amountremainingtotalbox'));
			this.result.amountDue_formatted = Utils.formatCurrency(this.record.getFieldValue('amountremainingtotalbox'));
		}

	,	postGet: function ()
		{
			this.result.lines = _.reject(this.result.lines, function (line)
			{
				return line.quantity === 0;
			});
		}

	,	getStatus: function ()
		{
			this.result.status =
			{
				internalid: nlapiLookupField(this.result.recordtype, this.result.internalid, 'status')
			,	name: nlapiLookupField(this.result.recordtype, this.result.internalid, 'status', true)
			};
		}
	,	getCreatedFrom: function()
		{
			var created_from_internalid = nlapiLookupField(this.result.recordtype, this.result.internalid, 'createdfrom')
			,	recordtype = created_from_internalid ? Utils.getTransactionType(created_from_internalid) : ''
			,	tranid = recordtype ? nlapiLookupField(recordtype, created_from_internalid, 'tranid') : '';

			this.result.createdfrom =
			{
					internalid: created_from_internalid
				,	name: nlapiLookupField(this.result.recordtype, this.result.internalid, 'createdfrom', true) || ''
				,	recordtype: recordtype
				,	tranid: tranid
			};
		}
	});
});