package org.apache.shiro.web.filter.authc;

import org.apache.shiro.authc.AuthenticationToken;

public class StatelessToken implements AuthenticationToken {

    public StatelessToken() {
        super();
    }

    public StatelessToken(String accessToken) {
        super();
        this.accessToken = accessToken;
    }

    private String accessToken;

    public Object getPrincipal() {
        return accessToken;
    }

    public Object getCredentials() {
        return accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
