
{{#if showExtendedMenu}}
	<a class="header-profile-welcome-link" href="#" data-toggle="dropdown">
		<i class="header-profile-welcome-user-icon"></i>
		{{translate 'Welcome <strong class="header-profile-welcome-link-name">$(0)</strong>' displayName}}
		<i class="header-profile-welcome-carret-icon"></i>
	</a>

	{{#if showMyAccountMenu}}
		<ul class="header-profile-menu-myaccount-container">
			<li data-view="Header.Menu.MyAccount"></li>
		</ul>
	{{/if}}

{{else}}

	{{#if showLoginMenu}}
		{{#if showLogin}}
			<div class="header-profile-menu-login-container">
				<ul class="header-profile-menu-login">
					{{#if showRegister}}
						<li>
							<a class="header-profile-register-link" data-touchpoint="register" data-hashtag="login-register" href="#">
								{{translate 'Join CFGI'}}
							</a>
						</li>
					{{/if}}
						<li>
                            <a class="header-profile-login-link" data-touchpoint="login" data-hashtag="login-register" href="#">
                                {{translate 'Log In'}}
                            </a>
                        </li>
                        <li></li>
                        <li class="site-search-item">
                            <div class="header-site-search" data-view="SiteSearch" data-type="SiteSearch"></div>
                        </li>
				</ul>
			</div>
		{{/if}}
	{{else}}
		<a class="header-profile-loading-link">
			<i class="header-profile-loading-icon"></i>
			<span class="header-profile-loading-indicator"></span>
		</a>
	{{/if}}

{{/if}}