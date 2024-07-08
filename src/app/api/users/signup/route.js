import {connect} from '@/dbConfig/dbConfing.js'
import User from '@/models/userModal'
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from "bcryptjs"


connect();


