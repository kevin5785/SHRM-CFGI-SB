<input data-type="search-input" class="itemssearcher-input typeahead"
	placeholder="{{translate 'Search this site'}}"
	type="search" autocomplete="off"
	{{#if showId}} id="{{id}}" {{/if}} {{#if showName}} name="{{name}}" {{/if}}
	maxlength="{{maxLength}}"/>