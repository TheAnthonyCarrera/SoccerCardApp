package com.anthony.cardapplication;

import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class auth {

    public static String path() {
        try{
            BufferedReader reader = new BufferedReader(new FileReader("SoccerCardApp/auth.txt"));
            reader.readLine();
            reader.readLine();
            return reader.readLine();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    public static String password() {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("auth.txt"));
            reader.readLine(); // skip the username
            return reader.readLine();
        } catch (FileNotFoundException e) {
            return "file not found";
        } catch (IOException e) {
            return "failed to read file contents";
        }
    }

    public static String username() {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("auth.txt"));
            return reader.readLine();
        } catch (FileNotFoundException e) {
            return "file not found";
        } catch (IOException e) {
            return "failed to read file contents";
        }
    }

    /*
    method unused.
    public static void overwrite() {
        try {
            BufferedReader reader = new BufferedReader(new FileReader(path()));
            String newUsername = username();
            String newPassword = password();
            String regex = "spring\\.datasource\\.(username|password)=(.*)";
            Pattern pattern = Pattern.compile(regex);
            String line;
            StringBuilder content = new StringBuilder();

            while ((line = reader.readLine()) != null) {
                content.append(line);
                if (reader.ready()) { // Check if there are more lines to read
                    content.append("\n"); // If so, append a newline
                }
            }

            String data = content.toString();
            Matcher matcher = pattern.matcher(data);

            StringBuffer sb = new StringBuffer();

            while (matcher.find()) {
                if ("username".equals(matcher.group(1))) {
                    matcher.appendReplacement(sb, "spring.datasource.username=" + newUsername);
                } else if ("password".equals(matcher.group(1))) {
                    matcher.appendReplacement(sb, "spring.datasource.password=" + newPassword);
                }
            }

            matcher.appendTail(sb);

            PrintWriter writer = new PrintWriter(new File(path()));
            writer.print(sb.toString()); // Use print instead of println to avoid an extra newline
            writer.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
     */
}
