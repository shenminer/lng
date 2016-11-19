package cn.edu.hdu.lab505.innovation.util;

/**
 * Created by hhx on 2016/11/19.
 */
public class ByteUtil {
    public static String byteToString(byte[] a) {
        StringBuffer sb = new StringBuffer();
        for (Byte b : a) {
            int number = b & 0xff;
            String hex = Integer.toHexString(number);
            if (hex.length() == 1) {
                sb.append("0" + hex);
            } else {
                sb.append(hex);
            }
        }
        return sb.toString();
    }
}
