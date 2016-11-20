package cn.edu.hdu.lab505.innovation.service.Exception;

/**
 * Created by hhx on 2016/11/20.
 */
public class ImeiNotFoundException extends Exception {
    public ImeiNotFoundException() {
        super("imei not found");
    }
}
