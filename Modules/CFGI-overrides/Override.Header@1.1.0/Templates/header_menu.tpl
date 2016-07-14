<nav class="header-menu-secondary-nav">

	<!--<div class="header-menu-search">
		<button class="header-menu-search-link" data-action="show-sitesearch" title="{{translate 'Search'}}">
			<i class="header-menu-search-icon"></i>
		</button>
	</div>-->


	<ul class="header-menu-level1">

		{{#each categories}}
		<li>
			<a class="{{class}}" {{objectToAtrributes this}} {{#if categories}}data-toggle="dropdown"{{/if}}>
			{{text}}
			</a>
			{{#if categories}}
			<ul class="header-menu-level-container">
				<li>
					<ul class="header-menu-level2">
						{{#each categories}}
						<li>
							<a class="{{class}}" {{objectToAtrributes this}}>{{text}}</a>

							{{#if categories}}
							<ul class="header-menu-level3">
								{{#each categories}}
								<li>
									<a class="{{class}}" {{objectToAtrributes this}}>{{text}}</a>
								</li>
								{{/each}}
							</ul>
							{{/if}}
						</li>
						{{/each}}
					</ul>
				</li>
			</ul>
			{{/if}}
		</li>
		{{/each}}

	</ul>

</nav>
