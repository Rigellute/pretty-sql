const regex = /(?:\bA\b|\bABORT\b|\bABS\b|\bABSOLUTE\b|\bACCESS\b|\bACTION\b|\bADA\b|\bADD\b|\bADMIN\b|\bAFTER\b|\bAGGREGATE\b|\bALIAS\b|\bALL\b|\bALLOCATE\b|\bALSO\b|\bALTER\b|\bALWAYS\b|\bANALYSE\b|\bANALYZE\b|\bAND\b|\bANY\b|\bARE\b|\bARRAY\b|\bAS\b|\bASC\b|\bASENSITIVE\b|\bASSERTION\b|\bASSIGNMENT\b|\bASYMMETRIC\b|\bAT\b|\bATOMIC\b|\bATTRIBUTE\b|\bATTRIBUTES\b|\bAUTHORIZATION\b|\bAVG\b|\bBACKWARD\b|\bBEFORE\b|\bBEGIN\b|\bBERNOULLI\b|\bBETWEEN\b|\bBIGINT\b|\bBINARY\b|\bBIT\b|\bBITVAR\b|\bBIT_LENGTH\b|\bBLOB\b|\bBOOLEAN\b|\bBOTH\b|\bBREADTH\b|\bBY\b|\bC\b|\bCACHE\b|\bCALL\b|\bCALLED\b|\bCARDINALITY\b|\bCASCADE\b|\bCASCADED\b|\bCASE\b|\bCAST\b|\bCATALOG\b|\bCATALOG_NAME\b|\bCEIL\b|\bCEILING\b|\bCHAIN\b|\bCHAR\b|\bCHARACTER\b|\bCHARACTERISTICS\b|\bCHARACTERS\b|\bCHARACTER_LENGTH\b|\bCHARACTER_SET_CATALOG\b|\bCHARACTER_SET_NAME\b|\bCHARACTER_SET_SCHEMA\b|\bCHAR_LENGTH\b|\bCHECK\b|\bCHECKED\b|\bCHECKPOINT\b|\bCLASS\b|\bCLASS_ORIGIN\b|\bCLOB\b|\bCLOSE\b|\bCLUSTER\b|\bCOALESCE\b|\bCOBOL\b|\bCOLLATE\b|\bCOLLATION\b|\bCOLLATION_CATALOG\b|\bCOLLATION_NAME\b|\bCOLLATION_SCHEMA\b|\bCOLLECT\b|\bCOLUMN\b|\bCOLUMN_NAME\b|\bCOMMAND_FUNCTION\b|\bCOMMAND_FUNCTION_CODE\b|\bCOMMENT\b|\bCOMMIT\b|\bCOMMITTED\b|\bCOMPLETION\b|\bCONDITION\b|\bCONDITION_NUMBER\b|\bCONNECT\b|\bCONNECTION\b|\bCONNECTION_NAME\b|\bCONSTRAINT\b|\bCONSTRAINTS\b|\bCONSTRAINT_CATALOG\b|\bCONSTRAINT_NAME\b|\bCONSTRAINT_SCHEMA\b|\bCONSTRUCTOR\b|\bCONTAINS\b|\bCONTINUE\b|\bCONVERSION\b|\bCONVERT\b|\bCOPY\b|\bCORR\b|\bCORRESPONDING\b|\bCOUNT\b|\bCOVAR_POP\b|\bCOVAR_SAMP\b|\bCREATE\b|\bCREATEDB\b|\bCREATEROLE\b|\bCREATEUSER\b|\bCROSS\b|\bCSV\b|\bCUBE\b|\bCUME_DIST\b|\bCURRENT\b|\bCURRENT_DATE\b|\bCURRENT_DEFAULT_TRANSFORM_GROUP\b|\bCURRENT_PATH\b|\bCURRENT_ROLE\b|\bCURRENT_TIME\b|\bCURRENT_TIMESTAMP\b|\bCURRENT_TRANSFORM_GROUP_FOR_TYPE\b|\bCURRENT_USER\b|\bCURSOR\b|\bCURSOR_NAME\b|\bCYCLE\b|\bDATA\b|\bDATABASE\b|\bDATE\b|\bDATETIME_INTERVAL_CODE\b|\bDATETIME_INTERVAL_PRECISION\b|\bDAY\b|\bDEALLOCATE\b|\bDEC\b|\bDECIMAL\b|\bDECLARE\b|\bDEFAULT\b|\bDEFAULTS\b|\bDEFERRABLE\b|\bDEFERRED\b|\bDEFINED\b|\bDEFINER\b|\bDEGREE\b|\bDELETE\b|\bDELIMITER\b|\bDELIMITERS\b|\bDENSE_RANK\b|\bDEPTH\b|\bDEREF\b|\bDERIVED\b|\bDESC\b|\bDESCRIBE\b|\bDESCRIPTOR\b|\bDESTROY\b|\bDESTRUCTOR\b|\bDETERMINISTIC\b|\bDIAGNOSTICS\b|\bDICTIONARY\b|\bDISABLE\b|\bDISCONNECT\b|\bDISPATCH\b|\bDISTINCT\b|\bDO\b|\bDOMAIN\b|\bDOUBLE\b|\bDROP\b|\bDYNAMIC\b|\bDYNAMIC_FUNCTION\b|\bDYNAMIC_FUNCTION_CODE\b|\bEACH\b|\bELEMENT\b|\bELSE\b|\bENABLE\b|\bENCODING\b|\bENCRYPTED\b|\bEND\b|\bEND-EXEC\b|\bEQUALS\b|\bESCAPE\b|\bEVERY\b|\bEXCEPT\b|\bEXCEPTION\b|\bEXCLUDE\b|\bEXCLUDING\b|\bEXCLUSIVE\b|\bEXEC\b|\bEXECUTE\b|\bEXISTING\b|\bEXISTS\b|\bEXP\b|\bEXPLAIN\b|\bEXTERNAL\b|\bEXTRACT\b|\bFALSE\b|\bFETCH\b|\bFILTER\b|\bFINAL\b|\bFIRST\b|\bFLOAT\b|\bFLOOR\b|\bFOLLOWING\b|\bFOR\b|\bFORCE\b|\bFOREIGN\b|\bFORTRAN\b|\bFORWARD\b|\bFOUND\b|\bFREE\b|\bFREEZE\b|\bFROM\b|\bFULL\b|\bFUNCTION\b|\bFUSION\b|\bG\b|\bGENERAL\b|\bGENERATED\b|\bGET\b|\bGLOBAL\b|\bGO\b|\bGOTO\b|\bGRANT\b|\bGRANTED\b|\bGREATEST\b|\bGROUP\b|\bGROUPING\b|\bHANDLER\b|\bHAVING\b|\bHEADER\b|\bHIERARCHY\b|\bHOLD\b|\bHOST\b|\bHOUR\b|\bIDENTITY\b|\bIGNORE\b|\bILIKE\b|\bIMMEDIATE\b|\bIMMUTABLE\b|\bIMPLEMENTATION\b|\bIMPLICIT\b|\bIN\b|\bINCLUDING\b|\bINCREMENT\b|\bINDEX\b|\bINDICATOR\b|\bINFIX\b|\bINHERIT\b|\bINHERITS\b|\bINITIALIZE\b|\bINITIALLY\b|\bINNER\b|\bINOUT\b|\bINPUT\b|\bINSENSITIVE\b|\bINSERT\b|\bINSTANCE\b|\bINSTANTIABLE\b|\bINSTEAD\b|\bINT\b|\bINTEGER\b|\bINTERSECT\b|\bINTERSECTION\b|\bINTERVAL\b|\bINTO\b|\bINVOKER\b|\bIS\b|\bISNULL\b|\bISOLATION\b|\bITERATE\b|\bJOIN\b|\bK\b|\bKEY\b|\bKEY_MEMBER\b|\bKEY_TYPE\b|\bLANCOMPILER\b|\bLANGUAGE\b|\bLARGE\b|\bLAST\b|\bLATERAL\b|\bLEADING\b|\bLEAST\b|\bLEFT\b|\bLENGTH\b|\bLESS\b|\bLEVEL\b|\bLIKE\b|\bLIMIT\b|\bLISTEN\b|\bLN\b|\bLOAD\b|\bLOCAL\b|\bLOCALTIME\b|\bLOCALTIMESTAMP\b|\bLOCATION\b|\bLOCATOR\b|\bLOCK\b|\bLOGIN\b|\bLOWER\b|\bM\b|\bMAP\b|\bMATCH\b|\bMATCHED\b|\bMAX\b|\bMAXVALUE\b|\bMEMBER\b|\bMERGE\b|\bMESSAGE_LENGTH\b|\bMESSAGE_OCTET_LENGTH\b|\bMESSAGE_TEXT\b|\bMETHOD\b|\bMIN\b|\bMINUTE\b|\bMINVALUE\b|\bMOD\b|\bMODE\b|\bMODIFIES\b|\bMODIFY\b|\bMODULE\b|\bMONTH\b|\bMORE\b|\bMOVE\b|\bMULTISET\b|\bMUMPS\b|\bNAME\b|\bNAMES\b|\bNATIONAL\b|\bNATURAL\b|\bNCHAR\b|\bNCLOB\b|\bNESTING\b|\bNEW\b|\bNEXT\b|\bNO\b|\bNOCREATEDB\b|\bNOCREATEROLE\b|\bNOCREATEUSER\b|\bNOINHERIT\b|\bNOLOGIN\b|\bNONE\b|\bNORMALIZE\b|\bNORMALIZED\b|\bNOSUPERUSER\b|\bNOT\b|\bNOTHING\b|\bNOTIFY\b|\bNOTNULL\b|\bNOWAIT\b|\bNULL\b|\bNULLABLE\b|\bNULLIF\b|\bNULLS\b|\bNUMBER\b|\bNUMERIC\b|\bOBJECT\b|\bOCTETS\b|\bOCTET_LENGTH\b|\bOF\b|\bOFF\b|\bOFFSET\b|\bOIDS\b|\bOLD\b|\bON\b|\bONLY\b|\bOPEN\b|\bOPERATION\b|\bOPERATOR\b|\bOPTION\b|\bOPTIONS\b|\bOR\b|\bORDER\b|\bORDERING\b|\bORDINALITY\b|\bOTHERS\b|\bOUT\b|\bOUTER\b|\bOUTPUT\b|\bOVER\b|\bOVERLAPS\b|\bOVERLAY\b|\bOVERRIDING\b|\bOWNER\b|\bPAD\b|\bPARAMETER\b|\bPARAMETERS\b|\bPARAMETER_MODE\b|\bPARAMETER_NAME\b|\bPARAMETER_ORDINAL_POSITION\b|\bPARAMETER_SPECIFIC_CATALOG\b|\bPARAMETER_SPECIFIC_NAME\b|\bPARAMETER_SPECIFIC_SCHEMA\b|\bPARTIAL\b|\bPARTITION\b|\bPASCAL\b|\bPASSWORD\b|\bPATH\b|\bPERCENTILE_CONT\b|\bPERCENTILE_DISC\b|\bPERCENT_RANK\b|\bPLACING\b|\bPLI\b|\bPOSITION\b|\bPOSTFIX\b|\bPOWER\b|\bPRECEDING\b|\bPRECISION\b|\bPREFIX\b|\bPREORDER\b|\bPREPARE\b|\bPREPARED\b|\bPRESERVE\b|\bPRIMARY\b|\bPRIOR\b|\bPRIVILEGES\b|\bPROCEDURAL\b|\bPROCEDURE\b|\bPUBLIC\b|\bQUOTE\b|\bRANGE\b|\bRANK\b|\bREAD\b|\bREADS\b|\bREAL\b|\bRECHECK\b|\bRECURSIVE\b|\bREF\b|\bREFERENCES\b|\bREFERENCING\b|\bREGR_AVGX\b|\bREGR_AVGY\b|\bREGR_COUNT\b|\bREGR_INTERCEPT\b|\bREGR_R2\b|\bREGR_SLOPE\b|\bREGR_SXX\b|\bREGR_SXY\b|\bREGR_SYY\b|\bREINDEX\b|\bRELATIVE\b|\bRELEASE\b|\bRENAME\b|\bREPEATABLE\b|\bREPLACE\b|\bRESET\b|\bRESTART\b|\bRESTRICT\b|\bRESULT\b|\bRETURN\b|\bRETURNED_CARDINALITY\b|\bRETURNED_LENGTH\b|\bRETURNED_OCTET_LENGTH\b|\bRETURNED_SQLSTATE\b|\bRETURNS\b|\bREVOKE\b|\bRIGHT\b|\bROLE\b|\bROLLBACK\b|\bROLLUP\b|\bROUTINE\b|\bROUTINE_CATALOG\b|\bROUTINE_NAME\b|\bROUTINE_SCHEMA\b|\bROW\b|\bROWS\b|\bROW_COUNT\b|\bROW_NUMBER\b|\bRULE\b|\bSAVEPOINT\b|\bSCALE\b|\bSCHEMA\b|\bSCHEMA_NAME\b|\bSCOPE\b|\bSCOPE_CATALOG\b|\bSCOPE_NAME\b|\bSCOPE_SCHEMA\b|\bSCROLL\b|\bSEARCH\b|\bSECOND\b|\bSECTION\b|\bSECURITY\b|\bSELECT\b|\bSELF\b|\bSENSITIVE\b|\bSEQUENCE\b|\bSERIALIZABLE\b|\bSERVER_NAME\b|\bSESSION\b|\bSESSION_USER\b|\bSET\b|\bSETOF\b|\bSETS\b|\bSHARE\b|\bSHOW\b|\bSIMILAR\b|\bSIMPLE\b|\bSIZE\b|\bSMALLINT\b|\bSOME\b|\bSOURCE\b|\bSPACE\b|\bSPECIFIC\b|\bSPECIFICTYPE\b|\bSPECIFIC_NAME\b|\bSQL\b|\bSQLCODE\b|\bSQLERROR\b|\bSQLEXCEPTION\b|\bSQLSTATE\b|\bSQLWARNING\b|\bSQRT\b|\bSTABLE\b|\bSTART\b|\bSTATE\b|\bSTATEMENT\b|\bSTATIC\b|\bSTATISTICS\b|\bSTDDEV_POP\b|\bSTDDEV_SAMP\b|\bSTDIN\b|\bSTDOUT\b|\bSTORAGE\b|\bSTRICT\b|\bSTRUCTURE\b|\bSTYLE\b|\bSUBCLASS_ORIGIN\b|\bSUBLIST\b|\bSUBMULTISET\b|\bSUBSTRING\b|\bSUM\b|\bSUPERUSER\b|\bSYMMETRIC\b|\bSYSID\b|\bSYSTEM\b|\bSYSTEM_USER\b|\bTABLE\b|\bTABLESAMPLE\b|\bTABLESPACE\b|\bTABLE_NAME\b|\bTEMP\b|\bTEMPLATE\b|\bTEMPORARY\b|\bTERMINATE\b|\bTHAN\b|\bTHEN\b|\bTIES\b|\bTIME\b|\bTIMESTAMP\b|\bTIMEZONE_HOUR\b|\bTIMEZONE_MINUTE\b|\bTO\b|\bTOAST\b|\bTOP_LEVEL_COUNT\b|\bTRAILING\b|\bTRANSACTION\b|\bTRANSACTIONS_COMMITTED\b|\bTRANSACTIONS_ROLLED_BACK\b|\bTRANSACTION_ACTIVE\b|\bTRANSFORM\b|\bTRANSFORMS\b|\bTRANSLATE\b|\bTRANSLATION\b|\bTREAT\b|\bTRIGGER\b|\bTRIGGER_CATALOG\b|\bTRIGGER_NAME\b|\bTRIGGER_SCHEMA\b|\bTRIM\b|\bTRUE\b|\bTRUNCATE\b|\bTRUSTED\b|\bTYPE\b|\bUESCAPE\b|\bUNBOUNDED\b|\bUNCOMMITTED\b|\bUNDER\b|\bUNENCRYPTED\b|\bUNION\b|\bUNIQUE\b|\bUNKNOWN\b|\bUNLISTEN\b|\bUNNAMED\b|\bUNNEST\b|\bUNTIL\b|\bUPDATE\b|\bUPPER\b|\bUSAGE\b|\bUSER\b|\bUSER_DEFINED_TYPE_CATALOG\b|\bUSER_DEFINED_TYPE_CODE\b|\bUSER_DEFINED_TYPE_NAME\b|\bUSER_DEFINED_TYPE_SCHEMA\b|\bUSING\b|\bVACUUM\b|\bVALID\b|\bVALIDATOR\b|\bVALUE\b|\bVALUES\b|\bVARCHAR\b|\bVARIABLE\b|\bVARYING\b|\bVAR_POP\b|\bVAR_SAMP\b|\bVERBOSE\b|\bVIEW\b|\bVOLATILE\b|\bWHEN\b|\bWHENEVER\b|\bWHERE\b|\bWIDTH_BUCKET\b|\bWINDOW\b|\bWITH\b|\bWITHIN\b|\bWITHOUT\b|\bWORK\b|\bWRITE\b|\bYEAR\b|\bZONE\b)/gi;

export default function prettifySql(str) {
  return str.replace(regex, match => match.toUpperCase());
}