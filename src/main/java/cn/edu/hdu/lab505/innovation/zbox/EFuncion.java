package cn.edu.hdu.lab505.innovation.zbox;

public enum EFuncion {
    R_UP_UPDATA("00");
    private final String value;

    private EFuncion(String string) {
        this.value = string;
    }

    public String getValue() {
        return value;
    }
}
