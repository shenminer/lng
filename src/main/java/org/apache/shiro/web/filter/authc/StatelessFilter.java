package org.apache.shiro.web.filter.authc;

import java.io.IOException;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.ehcache.Cache;

import org.apache.shiro.web.filter.AccessControlFilter;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class StatelessFilter extends AccessControlFilter {

	private static final Logger log = LoggerFactory
			.getLogger(BasicHttpAuthenticationFilter.class);

	protected static final String TOKEN_HEADER = "token";

	@Override
	protected boolean isAccessAllowed(ServletRequest request,
			ServletResponse response, Object mappedValue) throws Exception {
		return false;
	}

	@Override
	protected boolean onAccessDenied(ServletRequest request,
			ServletResponse response) throws Exception {
		String accessToken = getTokenHeader(request);
		log.info("accessToken:"+accessToken);
		StatelessToken token = new StatelessToken(accessToken);
		try {
			getSubject(request, response).login(token);
		} catch (Exception e) {
			e.printStackTrace();
			onLoginFail(response); // 6、登录失败
			return false;
		}
		return true;
	}

	protected String getTokenHeader(ServletRequest request) {
		HttpServletRequest httpRequest = WebUtils.toHttp(request);
		return httpRequest.getHeader(TOKEN_HEADER);
	}

	// 登录失败时默认返回401状态码
	private void onLoginFail(ServletResponse response) throws IOException {
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
		httpResponse.getWriter().write("login error");
	}

}
